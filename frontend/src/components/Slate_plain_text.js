import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const Slate_plain_text = (props) => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
      {
        children: [{ text: props.default_text }],
      },
    ])
    console.log('slate : ' + props.default_text);
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