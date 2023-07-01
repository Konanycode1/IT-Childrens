export const inProduction = process.env.NODE_ENV  === 'production'
export const apiURL = inProduction?'':"http://localhost:3000"