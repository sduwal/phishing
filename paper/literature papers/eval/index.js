async function main() {
    const { Client } = require("pg");

    const client = new Client({
        user: "postgres",
        host: "db.uodzevvjhwhgwiuhdchp.supabase.co",
        database: "postgres",
        password: "c9T7TauGfvLM3za",
        port: 5432,
    });
    client.connect();

    const tableName = "eval";
    const getUniqueUser = {
        name: "getUniqueUser",
        text: `SELECT DISTINCT("userId") FROM ${tableName} where "userId" LIKE \'%@%\'`,
    };
    const result = await client.query(getUniqueUser);
    const uniqueUser = result.rows.reduce((acc, cur) => {
        acc.push(cur.userId);
        return acc;
    }, []);

    // get avergae time
    for (const user of uniqueUser) {
        const getStart = {
            name: "getStart",
            text: `SELECT date as start_time from ${tableName} where "userId"=$1 ORDER BY date ASC limit 1`,
            values: [user],
        };

        const startTime = (await client.query(getStart)).rows[0].start_time;
        const getEnd = {
            name: "getEnd",
            text: `SELECT date as end_time from ${tableName} where "userId"=$1 ORDER BY date DESC limit 1`,
            values: [user],
        };

        const endTime = (await client.query(getEnd)).rows[0].end_time;

        const timeTaken = new Date(endTime) - new Date(startTime);

        const weekChange = {
            name: "weekChange",
            text: `SELECT * from ${tableName} where "userId"=$1 and type='status/setCanCurrentlyTrain' order by id`,
            values: [user],
        };

        const weekChangeTime = (await client.query(weekChange)).rows;
        console.log(weekChangeTime);

        // const week1 = new Date(weekChangeTime[0]) - new Date(startTime);
        // const week2 = new Date(weekChangeTime[1]) - new Date(weekChangeTime[0]);
        // const week3 = new Date(weekChangeTime[2]) - new Date(weekChangeTime[1]);
        // const week4 = new Date(weekChangeTime[3]) - new Date(weekChangeTime[2]);

        // console.log(
        //     user,
        //     ",",
        //     startTime,
        //     ",",
        //     endTime,
        //     ",",
        //     timeTaken,
        //     ",",
        //     weekChangeTime
        // );
    }

    process.exit();
}

main();
