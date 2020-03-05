import React from 'react';
import { List, Avatar, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Tarjetas = (props) =>{
  console.log(props.link)
  const {data}= props
  console.log(data)
    return(
        <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (

      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" key="list-vertical-star-o" />,
          <IconText type="like-o" text="156" key="list-vertical-like-o" />,
          <IconText type="message" text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={props.link+`/`+`${item.id}`}>{item.noTarjeta}</a>}
          // title={<a href={props.link+`/`+`${item.serializador}`}>{item.serializador}</a>}
          // title={<a href={props.link+`/`+`${item.id}`}>{item.departmentname}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
    )
}
export default Tarjetas;