const CosmosClient = require("@azure/cosmos").CosmosClient;
const getConfig = require("../config/dbconfig").getConfig;

const { endpoint, key, databaseId, containerId } = getConfig("bloom-content");

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

module.exports = {
    getContent: async function() {

        // query to return all items
        const querySpec = {
            query: "SELECT * from c"
        };

        try {
            // read all items in the Items container
            const { resources: items } = await container.items
                .query(querySpec)
                .fetchAll();

            items.forEach(item => {
                console.log(`item::::${item}`);
            });

            return items;
        } catch (error) {
            return [];
        }
    }
}