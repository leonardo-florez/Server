/* This file is used to start the server */

import app from './app';
import './database';

app.listen(3000, () => {console.log("Server listen on port", 3000);});