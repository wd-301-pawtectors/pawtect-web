const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

beforeAll(async () => {
  const dbURI = process.env.MONGODB_URI;
  await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Animals API', () => {
  it('should get all animals', async () => {
    const res = await request(app).get('/api/animals');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(24);
  });

  it('should search animals by name', async () => {
    const res = await request(app).get('/api/animals/search?query=Buddy');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].name).toBe('Buddy');
  });

  it('should search animals by breed', async () => {
    const res = await request(app).get('/api/animals/search?query=Golden Retriever');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].breed).toBe('Golden Retriever');
  });

  it('should search animals by multi-word breed', async () => {
    const res = await request(app).get('/api/animals/search?query=Domestic Shorthair');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].breed).toBe('Domestic Shorthair');
  });

  it('should filter animals by type', async () => {
    const res = await request(app).get('/api/animals/filter?type=Cat');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(12);
    expect(res.body[0].type).toBe('Cat');
  });

  it('should filter animals by age', async () => {
    const res = await request(app).get('/api/animals/filter?age=0-3');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(17);
  });

  it('should filter animals by size', async () => {
    const res = await request(app).get('/api/animals/filter?size=Medium');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(10);
  });

  it('should filter animals by gender', async () => {
    const res = await request(app).get('/api/animals/filter?gender=Male');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(14);
  });

  it('should get a specific animal by ID (Buddy)', async () => {
    const res = await request(app).get('/api/animals/67dd1b0267639e6ed5b57d1c');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('Buddy');
  });

  it('should get a specific animal by ID (Whiskers)', async () => {
    const res = await request(app).get('/api/animals/67dd1ee12820f7cbc5d748b4');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('Whiskers');
  });
});