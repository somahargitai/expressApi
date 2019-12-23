import { logger } from '../logger/winstonLogger';
// import logger2 from '../logger/winstonloggerclone';
// const logger2 = require('../logger/winstonloggerclone').default; - works
// const {logger2} = require('../logger/winstonloggerclone');  - error
// const logger2 = require('../logger/winstonloggerclone'); - error

// ------ export default value
// import { test1 } from './testexport1'; - undefined
// import  test1  from './testexport1'; - works
// import koala from './testexport1'; - works too

// import { test2 } from './testexport2'; - error
// import test2 from './testexport2'; - works
// import koala from './testexport2'; - works too
 
// import test3 from './testexport3'; - undefined
// import {test3} from './testexport3'; - works
// import test5 from './testexport3'; - error
// import { test5 } from './testexport3'; - works
// import { test3, test4, test5 } from './testexport3'; - works


const endpoint1 = (req, res) => {
  console.log('/endpoint_1');

  logger.error('stuff');
  // logger2.error('stuff2');

  res.type('application/json');
  res.status(200);
  return res.json('test response endpoint 1');
};


module.exports = endpoint1;