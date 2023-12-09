const AIRSTACK_API_URL = "https://api.airstack.xyz/graphql";
const AIRSTACK_API_KEY = "<INSERT API KEY HERE>";
const query = `query MyQuery {
    Polygon: TokenTransfers(
        input: {filter: {from: {_eq: "${address}"}}, blockchain: polygon, limit: 1, order: {blockTimestamp: DESC}}
    ) {
        TokenTransfer {
            blockTimestamp
        }
    }
}`;
const airstackRequest = Functions.makeHttpRequest({
    url: AIRSTACK_API_URL,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: AIRSTACK_API_KEY
    },
    data: {query},
});
const airstackResponse = await airstackRequest;
console.log(JSON.stringify(airstackResponse.data.data))
if (airstackResponse.error) {
    console.error(airstackResponse.error);
    throw Error("Request failed");
}
const data = airstackResponse.data.data.Polygon.TokenTransfer[0];
console.log(data);
const blockTimestamp = data.blockTimestamp;
const dateObject = new Date(blockTimestamp);
const unixTimestamp = Math.floor(dateObject.getTime() / 1000);
console.log(unixTimestamp);
return Functions.encodeUint256(unixTimestamp);