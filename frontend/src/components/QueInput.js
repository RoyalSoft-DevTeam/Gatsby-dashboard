import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { questionWithTitleContent } from '../redux/actions/questionAction'

const { TextArea } = Input

function QueInput () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const onSubmitQuestion = e => {
    const question = {
      title: title,
      content: content
    }
    dispatch(questionWithTitleContent(question))
  }
  return (
    <div
      style={{ border: '1px solid #d9d9d9', padding: '16px', marginTop: '5px' }}
    >
      <div
        style={{
          marginTop: '-20px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <h4
          style={{
            fontFamily: 'awesome',
            textAlign: 'center',
            fontSize: '20px'
          }}
        >
          Ask Questions
        </h4>
      </div>
      <div style={{ paddingBottom: '9px' }}>
        <Input
          placeholder='Question Title'
          onChange={e => setTitle(e.target.value)}
          style={{
            width: '100%',
            height: '50px',
            fontSize: '15px',
            color: 'black !important',
            border: '1px solid #d9d9d9',
            padding: '8px',
            fontFamily: 'awesome'
          }}
        />
      </div>
      <div>
        <TextArea
          placeholder='Type here'
          onChange={e => setContent(e.target.value)}
          style={{
            width: '100%',
            height: '250px',
            fontSize: '15px',
            color: 'black',
            border: '1px solid #d9d9d9',
            padding: '8px',
            fontWeight: 'bold',
            fontFamily: 'awesome'
          }}
        />
      </div>
      <div style={{ paddingTop: '10px' }}>
        <Button
          type='primary'
          style={{
            width: '100%',
            height: '40px',
            fontSize: '20px',
            fontFamily: 'awesome'
          }}
          onClick={onSubmitQuestion}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default QueInput
