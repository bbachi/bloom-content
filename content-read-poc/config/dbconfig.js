const getConfig = (tableName)=>{
    return {
      endpoint: process.env.COSMOS_DB_URL,
      key: process.env.COSMOS_DB_PRIMARY_KEY,
      databaseId: "bloom-dev",
      containerId: tableName
    }
  }
    
  module.exports = { getConfig };