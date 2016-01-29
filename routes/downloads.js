// Dependencies
var express = require('express');

var router = express.Router();

// route to handle all angular requests
router.get('/zipOudenaarde', function(req, res, next) {
  res.download('./downloadables/GolfOudenaarde.zip', 'GolfOudenaarde.zip');
});

router.get('/zipHeadFirst', function(req, res, next) {
  res.download('./downloadables/HeadFirstLounge.zip', 'HeadFirstLounge.zip');
});

router.get('/jarUnitConverter', function(req, res, next) {
  res.download('./downloadables/UnitConverter.jar', 'UnitConverter.jar');
});

router.get('/jarChrono', function(req, res, next) {
  res.download('./downloadables/chronometer.jar', 'Chronometer.jar');
});

router.get('/jarWatch', function(req, res, next) {
  res.download('./downloadables/AnaloogUurwerk.jar', 'Watch.jar');
});

router.get('/jarPuzzle', function(req, res, next) {
  res.download('./downloadables/schuifpuzzel.jar', 'Puzzle.jar');
});

router.get('/sourceRPG', function(req, res, next) {
  res.download('./downloadables/RPG.zip', 'RPG Story Generator.zip');
});

router.get('/exeRPG', function(req, res, next) {
  res.download('./downloadables/RPG.exe', 'RPG Story Generator.exe');
});

router.get('/sourceRPGv1.2', function(req, res, next) {
  res.download('./downloadables/RPGv1.2.zip', 'RPG v1.2.zip');
});

router.get('/exeRPGv1.2', function(req, res, next) {
  res.download('./downloadables/RPGv1.2.exe', 'RPG v1.2.exe');
});

router.get('/source8Queens', function(req, res, next) {
  res.download('./downloadables/8Queens.zip', '8Queens.zip');
});

router.get('/exe8Queens', function(req, res, next) {
  res.download('./downloadables/8Queens.exe', '8Queens.exe');
});

router.get('/sourcePolarEquations', function(req, res, next) {
  res.download('./downloadables/Poolvergelijkingen.zip', 'PolarEquations.zip');
});

router.get('/exePolarEquations', function(req, res, next) {
  res.download('./downloadables/Poolvergelijkingen.exe', 'PolarEquations.exe');
});

router.get('/exeTetraVex', function(req, res, next) {
  res.download('./downloadables/TetraVex.exe', 'TetraVex.exe');
});

router.get('/exeChambers', function(req, res, next) {
  res.download('./downloadables/Kamers.exe', 'Chambers.exe');
});

module.exports = router;
