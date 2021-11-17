import React from "react"

const DiscordRedirect = () => {
  React.useEffect(() => {
    window.location.href = "https://discord.gg/AJjDskFh"
  }, [])
  return (
    <>
      <meta
        http-equiv="refresh"
        content="0; URL=https://discord.gg/AJjDskFh"
      />
      <link rel="canonical" href="https://discord.gg/AJjDskFh"></link>
    </>
  )
}
export default DiscordRedirect
