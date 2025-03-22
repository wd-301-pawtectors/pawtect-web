const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

// CONNECT TO THE DATABASE BEFORE ALL TESTS
beforeAll(async () => {
  const dbURI = process.env.MONGODB_URI;
  await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
});

// CLOSE THE DATABASE CONNECTION AFTER ALL TESTS
afterAll(async () => {
  await mongoose.connection.close();
});

describe('ANIMALS API', () => {
  // TEST TO GET ALL ANIMALS
  it('SHOULD GET ALL ANIMALS', async () => {
    const res = await request(app).get('/api/animals');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(24);
  });

  // TEST TO SEARCH ANIMALS BY NAME
  it('SHOULD SEARCH ANIMALS BY NAME', async () => {
    const res = await request(app).get('/api/animals/search-filter?query=Buddy');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].name).toBe('Buddy');
  });

  // TEST TO SEARCH ANIMALS BY BREED
  it('SHOULD SEARCH ANIMALS BY BREED', async () => {
    const res = await request(app).get('/api/animals/search-filter?query=Golden Retriever');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].breed).toBe('Golden Retriever');
  });

  // TEST TO SEARCH ANIMALS BY MULTI-WORD BREED
  it('SHOULD SEARCH ANIMALS BY MULTI-WORD BREED', async () => {
    const res = await request(app).get('/api/animals/search-filter?query=Domestic Shorthair');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].breed).toBe('Domestic Shorthair');
  });

  // TEST TO FILTER ANIMALS BY TYPE
  it('SHOULD FILTER ANIMALS BY TYPE', async () => {
    const res = await request(app).get('/api/animals/search-filter?type=Cat');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(12);
    expect(res.body[0].type).toBe('Cat');
  });

  // TEST TO FILTER ANIMALS BY AGE
  it('SHOULD FILTER ANIMALS BY AGE', async () => {
    const res = await request(app).get('/api/animals/search-filter?age=0-3');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(17);
  });

  // TEST TO FILTER ANIMALS BY SIZE
  it('SHOULD FILTER ANIMALS BY SIZE', async () => {
    const res = await request(app).get('/api/animals/search-filter?size=Medium');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(10);
  });

  // TEST TO FILTER ANIMALS BY GENDER
  it('SHOULD FILTER ANIMALS BY GENDER', async () => {
    const res = await request(app).get('/api/animals/search-filter?gender=Male');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(14);
  });

  // TEST TO GET A SPECIFIC ANIMAL BY ID (BUDDY)
  it('SHOULD GET A SPECIFIC ANIMAL BY ID (BUDDY)', async () => {
    const res = await request(app).get('/api/animals/67dd1b0267639e6ed5b57d1c');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('Buddy');
  });

  // TEST TO GET A SPECIFIC ANIMAL BY ID (WHISKERS)
  it('SHOULD GET A SPECIFIC ANIMAL BY ID (WHISKERS)', async () => {
    const res = await request(app).get('/api/animals/67dd1ee12820f7cbc5d748b4');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('Whiskers');
  });
});