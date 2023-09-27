import React, { useEffect } from 'react'
import { Card, Col, Row, Upload, Form, Button, Input } from 'antd'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

const normFile = e => {
  console.log('Upload event:', e)
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}
const onChange = e => {
  console.log('Change:', e.target.value)
}
function PostBlog () {
  const currentQuestion = useSelector(state => state.question.applyQuestion)

  return (
    <Card
      style={{
        padding: '5px',
        marginTop: 0,
        height: '560px',
        marginBottom: '-6px'
      }}
    >
      <div
        style={{
          marginTop: '-30px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <h3
          style={{
            fontFamily: 'awesome',
            textAlign: 'center',
            fontSize: '30px'
          }}
        >
          Assignment Help
        </h3>
      </div>
      <Row>
        <Col span={12} style={{ paddingRight: '10px' }}>
          <div style={{ paddingBottom: '9px' }}>
            <Input
              type='text'
              name='title'
              placeholder='Question Title'
              value={'sdfsd'}
              onChange={onChange}
              style={{
                width: '100%',
                height: '40px',
                fontSize: '15px',
                color: 'black !important',
                border: '1px solid #d9d9d9',
                padding: '8px',
                fontFamily: 'awesome'
              }}
            />
          </div>
          <ReactQuill placeholder='Content' style={{ height: '280px' }} />
        </Col>
        {/* <Col span={12}> */}
        <Col span={6} style={{ paddingRight: '10px' }}>
          <div style={{ paddingBottom: '9px' }}>
            <Input
              type='text'
              name='courseCode'
              placeholder='Course Code'
              onChange={onChange}
              style={{
                width: '100%',
                height: '35px',
                fontSize: '15px',
                color: 'black !important',
                border: '1px solid #d9d9d9',
                padding: '8px',
                fontFamily: 'awesome'
              }}
            />
          </div>

          <div style={{ paddingBottom: '9px' }}>
            <Input
              type='text'
              name='universityName'
              placeholder='University name'
              onChange={onChange}
              style={{
                width: '100%',
                height: '35px',
                fontSize: '15px',
                color: 'black !important',
                border: '1px solid #d9d9d9',
                padding: '8px',
                fontFamily: 'awesome'
              }}
            />
          </div>

          <div style={{ paddingBottom: '9px' }}>
            <Input
              type='text'
              name='category'
              placeholder='Category'
              onChange={onChange}
              style={{
                width: '100%',
                height: '35px',
                fontSize: '15px',
                color: 'black !important',
                border: '1px solid #d9d9d9',
                padding: '8px',
                fontFamily: 'awesome'
              }}
            />
          </div>
          <Form.Item
            name='upload'
            label='Upload'
            style={{ paddingTop: '20px' }}
            valuePropName='fileList'
            getValueFromEvent={normFile}
            // extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name='logo' action='/upload.do' listType='picture'>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={6}>
          <div style={{ paddingBottom: '9px' }}>
            <Input
              type='text'
              name='courseName'
              placeholder='Course Name'
              onChange={onChange}
              style={{
                width: '100%',
                height: '35px',
                fontSize: '15px',
                color: 'black !important',
                border: '1px solid #d9d9d9',
                padding: '8px',
                fontFamily: 'awesome'
              }}
            />
          </div>
          <div style={{ paddingBottom: '9px' }}>
            <Input
              type='text'
              name='insertPrice'
              placeholder='Insert Price'
              onChange={onChange}
              style={{
                width: '100%',
                height: '35px',
                fontSize: '15px',
                color: 'black !important',
                border: '1px solid #d9d9d9',
                padding: '8px',
                fontFamily: 'awesome'
              }}
            />
          </div>
          <div style={{ paddingBottom: '9px' }}>
            <Input
              type='text'
              name='insertTag'
              placeholder='Insert Tags here'
              onChange={onChange}
              style={{
                width: '100%',
                height: '35px',
                fontSize: '15px',
                color: 'black !important',
                border: '1px solid #d9d9d9',
                padding: '8px',
                fontFamily: 'awesome'
              }}
            />
          </div>
          {/* </Col> */}
          <Form.Item label='Dragger'>
            <Form.Item
              name='dragger'
              valuePropName='fileList'
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name='files' action='/upload.do'>
                <p className='ant-upload-drag-icon'>
                  <InboxOutlined />
                </p>
                <p className='ant-upload-text'>
                  Click or drag file to this area to upload
                </p>
                <p className='ant-upload-hint'>
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </Col>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // height: "100vh",
            paddingLeft: '490px'
          }}
        >
          <Button
            type='primary'
            style={{
              width: '120px',
              height: '50px',
              fontSize: '20px',
              fontFamily: 'awesome'
            }}
          >
            Submit
          </Button>
        </div>
      </Row>
    </Card>
  )
}
export default PostBlog
