import express from 'express';
import tripRoutes from './trip.routes.js';
const router = express.Router();

const defaultRoutes = [
    {
        path: '/trip',
        route: tripRoutes,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
