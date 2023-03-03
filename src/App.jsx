import { useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar'
import SidebarComponent from './scenes/global/SidebarComponent'
import Dashboard from './scenes/dashboard'
import { Routes, Route } from 'react-router-dom'

// import Team from './scenes/team'
// import Invoices from './scenes/invoices'
// import Contacts from './scenes/contacts'
// import Bar from './scenes/bar'
// import Form from './scenes/from'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Calendar from './scenes/calendar'
// import Geography from './scenes/geography'
// import { Routes } from 'react-router-dom'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className='app'>
            <SidebarComponent />
            <main className='content'>
              <Topbar />
              <Routes>
                {/* <Route path='/' element={<Dashboard />} /> */}
                {/* <Route path='/team' element={<Team />} /> */}
                {/* <Route path='/contacts' element={<Contacts />} /> */}
                {/* <Route path='/invoices' element={<Invoices />} /> */}
                {/* <Route path='/form' element={<Form />} /> */}
                {/* <Route path='/bar' element={<Bar />} /> */}
                {/* <Route path='/pie' element={<Pie />} /> */}
                {/* <Route path='/line' element={<Line />} /> */}
                {/* <Route path='/faq' element={<FAQ />} /> */}
                {/* <Route path='/geography' element={<Geography />} /> */}
                {/* <Route path='/calendar' element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App