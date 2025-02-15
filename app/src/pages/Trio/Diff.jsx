import React from 'react';
import ReactDiffViewer from 'react-diff-viewer-continued';

export default function({oldCode, newCode}) {
    return (
      <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
    );
};