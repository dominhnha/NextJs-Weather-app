import React from 'react'
interface adminLayout {
    children: React.ReactNode;
}
  
const AdminLayout:React.FC<adminLayout> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default AdminLayout