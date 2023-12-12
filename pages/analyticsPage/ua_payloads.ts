/* eslint-disable no-useless-escape */
export class UaPayloads {

  // default payload, can be used ib all methods 
  // you should only send nessesary data from analyticsDataSet
  // please delete all other methods from this file 
  // you can use the same for DA, but you need to modify it according to DA requirements 
  static uaQueryParmeter(userId: string, event: string, context: string, platform: string) {
    const query = [
      {
        "params": `{\"context\":\"${context}\",\"receiverId\":\"8937\",\"role\":\"user\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"followType\":1,\"total_spend\":\"0\",\"anchor\":\"top_streamers\"}`,
        "event": `${event}`,
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": `${context}`,
        "userId": `${userId}`,
        "platform": `${platform}`,
        "brandId": 1,
        "receiverId": "8937",
        "eventTimeMs": 1689080346335,
        "role": "user",
        "appName": "plamfy",
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }
}