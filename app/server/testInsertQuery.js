import { Meteor } from 'meteor/meteor';
import { Percentages } from '../imports/api/Worksheets/2503PercentagesCollection'; // Adjust the import based on your folder structure

Meteor.startup(() => {
  // Insert a test document into the Percentages collection
  console.log('Inserting test data...');
  const testData = {
    year: 4,
    percentages: {
      pension_accumulation: 16.0,
      retiree_health_insurance: 8.0,
      other_post_employment_benefits: 0.0,
      employees_health_fund: 7.5,
      social_security: 6.5,
      medicare: 1.5,
      workers_compensation: 1.3,
      unemployment_compensation: 1.0,
      pension_administration: 0.1,
      composite_rate: 42.0,
    },
    owner: 'john@foo.com',
  };

  // Insert test data
  const insertedId = Percentages._collection.insert(testData);
  console.log('Inserted test data with ID:', insertedId);

  // Query the collection to see if the document is inserted
  const queryResult = Percentages.find({ year: 4 }).fetch();
  console.log('Query result for year 4:', queryResult);

  // Optional: Delete the inserted data after testing
  // Percentages._collection.remove(insertedId);
  // console.log('Removed test data.');
});
