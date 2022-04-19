import CsvWriter from 'csv-writer';
const createCsvWriter = CsvWriter.createObjectCsvWriter;

const writeToFile = (data) => {
    const fileName = `gen-input-${data.length}-records.csv`;
    const csvWriter = createCsvWriter({
        path: fileName,
        header: [
            {id: 'fName', title: 'FIRST_NAME'},
            {id: 'lName', title: 'LAST_NAME'},
            {id: 'addr1', title: 'ADDRESS_1'},
            {id: 'addr2', title: 'ADDRESS_2'},
            {id: 'city', title: 'CITY'},
            {id: 'postal', title: 'POSTAL_CODE'},
            {id: 'state', title: 'STATE_CODE'},
            {id: 'email', title: 'EMAIL'},
            {id: 'phone1', title: 'PHONE_1'},
            {id: 'phone2', title: 'PHONE_2'},
        ]
    });
    csvWriter.writeRecords(data).then(() => console.log("Finished writing to file: ", fileName));
}

export {writeToFile};