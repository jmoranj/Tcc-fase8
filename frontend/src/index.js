import React from 'react';
import { createRoot } from 'react-dom';

import Paths from './Paths';

const container = document.getElementById("root")
const origin = createRoot(container)

origin.render(< Paths />)