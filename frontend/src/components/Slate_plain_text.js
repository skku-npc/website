import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const Slate_plain_text = (props) => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ])
    return (
      <Slate
        editor={editor}
        value={value}

        onChange={newValue => {
          setValue(newValue);
          props.onChangeString(newValue[0].children[0].text);
        }}
      >
        <Editable />
      </Slate>
    )
  }
export default Slate_plain_text;