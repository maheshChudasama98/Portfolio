import { Box } from '@mui/material'
import React from 'react'

const Index = ({ defaultColors }) => {
  return (
    <>
      <Box>
        <h1 style={{ color: defaultColors?.subHeaderColor }} > Master of Computer Application </h1>
        <h2 style={{ color: defaultColors?.color, fontWeight: 100 }}>Marwadi university </h2>
        <h4 style={{ color: defaultColors?.blackAndWight }}>Mar-2023 </h4>
      </Box>

      <Box>
        <h1 style={{ color: defaultColors?.subHeaderColor }} > Bachelor of Computer Application </h1>
        <h2 style={{ color: defaultColors?.color, fontWeight: 100 }}>T.N. Rao College</h2>
        <h4 style={{ color: defaultColors?.blackAndWight }}>Mar-2021 </h4>
      </Box>
    </>
  )
}

export default Index