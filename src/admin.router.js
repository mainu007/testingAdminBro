const AdminBro = require('admin-bro');
const express = require('express');
const { buildRouter } = require('@admin-bro/express');

const buildAdminRouter = (admin) => {
    const router = buildRouter(admin);
    return router;
};

module.exports = buildAdminRouter;
