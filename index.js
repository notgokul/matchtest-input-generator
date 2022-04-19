import {faker} from "@faker-js/faker";

const createRecord = (fName,lName, addr1, addr2, city, postal, state, email, phone1, phone2) => {
    return {fName,lName, addr1, addr2, city, postal, state, email, phone1, phone2};
}

const generateData = (count) => {
    const records = [];
    let i = 0;
    while (i < count) {
        const record = createRecord(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.address.streetAddress(),
            "",
            faker.address.city(),
            faker.address.zipCode(),
            faker.address.state(),
            faker.internet.email(),
            faker.phone.phoneNumber(),
            "",
        );
        records.push(record);
        i++;
    }
    console.log(records);
}

generateData(2);