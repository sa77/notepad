import React, {
  CSSProperties, useState, useEffect, FormEvent,
} from 'react';

const textareaStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  float: 'left',
  resize: 'none',
  lineHeight: '1.5em',
  margin: 0,
  padding: '20px',
  fontSize: '3em',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  boxSizing: 'border-box',
};

function App() {
  const [content, setContent] = useState<string>('');

  // - exec only once (componentDidMount)
  useEffect(() => {
    const storedContent = localStorage.getItem('content');
    if (storedContent) setContent(storedContent);
  }, []);

  const handleKeyPress = (e: FormEvent<HTMLTextAreaElement>) => {
    const currentContent = (e.target as HTMLTextAreaElement).value;
    setContent(currentContent);
    localStorage.setItem('content', currentContent);
  };

  return (
    <div className="App">
      <textarea value={content} rows={200} style={textareaStyle} autoFocus onChange={handleKeyPress} />
    </div>
  );
}

export default App;
