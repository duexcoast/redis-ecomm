import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('vehicle', {
		color: 'red',
		year: 1973
	});
	const vehicle = await client.hVals('vehicle');
	console.log(vehicle);
};
run();
