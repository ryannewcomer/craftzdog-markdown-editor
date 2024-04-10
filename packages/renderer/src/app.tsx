import React, {useState, useCallback} from 'react';
import Editor from './editor';
import Previe from './preview';
import './app.css';

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World\n');
};
