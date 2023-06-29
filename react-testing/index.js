const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFulName = getFullName("Bruce", "Wayne");
const expectedFulName = "Bruce Wayne";

if (actualFulName !== expectedFulName) {
  throw new Error(`${actualFulName} is not equal to ${expectedFulName}`);
}
