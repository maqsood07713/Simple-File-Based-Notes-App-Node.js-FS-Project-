const fs =require('fs');

async function createFile() {
    try{
        await fs.promises.writeFile('test.txt','Hello, Node.js!','utf8');
        console.log('File created successfully!');
    } catch (error) {
        console.error('Error creating file:', error);
    }
}
createFile();