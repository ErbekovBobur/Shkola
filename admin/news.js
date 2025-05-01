// mongodb + srv://<db_username>:<db_password>@data-0.qktfsfs.mongodb.net/?retryWrites=true&w=majority&appName=data-0
// mongodb + srv://<db_username>:<db_password>@data-0.qktfsfs.mongodb.net/?retryWrites=true&w=majority&appName=data-0
// mongodb + srv://atlas-sample-dataset-load-67f2a3dbb89c807b62c44c28:<db_password>@data-0.qktfsfs.mongodb.net/?retryWrites=true&w=majority&appName=data-0
// pulbic key - tahgbiqa
// private key - fc54f964 - 73be - 4cf5 - 8387 - f85f898f4c8f
const apiKey = 'ВАШ_API_КЛЮЧ';
const clusterName = 'ВАШ_КЛАСТЕР';
const databaseName = 'ВАША_БАЗА_ДАННЫХ';
const collectionName = 'ВАША_КОЛЛЕКЦИЯ';

async function addItem() {
    const response = await fetch(`https://data.mongodb-api.com/app/data-XXXXX/endpoint/data/v1/action/insertOne`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
        },
        body: JSON.stringify({
            collection: collectionName,
            database: databaseName,
            data: { name: 'Sample Item', value: 100 },
        }),
    });

    const result = await response.json();
    console.log(result);
}
