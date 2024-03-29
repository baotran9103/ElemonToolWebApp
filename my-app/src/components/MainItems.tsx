import React from "react";
import Data from "./Data/Data";
import SignIn from "./SignIn";
// import {useContext} from 'react'
// import {AppContext} from '../components/context/UserContext'
// import {prisma} from '../db/client'
function MainItems(props:any) {
  // const context = useContext(AppContext)
  // const mySocket = context.ioSocket!

  return (
    <div className="sm:flex-col flex w-full">
      <div className=" Left-items sm:w-screen sm:border-none  border-r-2 border-spacing-1 border-indigo-300 px-4">
       
        <SignIn />
      </div>
      <div className="Right-items flex justify-center w-full  h-full">
        <Data />
        {/* <button onClick={()=>{
          console.log("clicked")
          mySocket.emit("clicked",{data:'wth'})
          mySocket.on("received-item",(context)=>{
            console.log("received event")
            console.log(context)
          })
        }}>CLick me</button> */}
      </div>
    </div>
  );
}

export default MainItems;


// export const getServerSideProps = async (context)=>{
//   let cookies = context.req.cookies
//   const users = await prisma.user.findMany()
//   return{
//     props:{
//       users:JSON.stringify(users)
//     }
//   }
//   // return{
//   //   props:{
//   //     cookies
//   //   }
//   // }
// }
// MainItems.getInitialProps = async (ctx)=>{
//   console.log(ctx)
//   return {
//     cookies: ctx.req.cookies
//   }
// }
