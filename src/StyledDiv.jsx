
function StyledDiv({children,title}) {
    const styles = {backgroundColor: "blue"}
  return (
    <div style={styles}>{children}<h2>{title}</h2></div>
  )
}

export default StyledDiv