

const express = require('express');
const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require('../controllers/notController');
const NotModel = require('../models/notModel')

const router = express.Router()

router.get('/', notlarGetir)

//listele
router.get('/:id', notGetir)

//ekle
router.post('/', notOlustur)

//sil
router.delete('/:id', notSil)

//güncelle
router.patch('/:id', notGuncelle)

module.exports = router;