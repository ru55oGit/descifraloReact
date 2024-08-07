import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { useLanguageContext } from 'store/language'
import i18n from 'constants/i18n.json'

const Collaborations = () => {
  const theme = useTheme()
  const { languageState } = useLanguageContext()

  return (
    <Box
      sx={{
        background: theme.palette.white.main,
        mt: 0.5,
        pt: 2,
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Typography variant="hxxl">
        {i18n.texts[languageState?.language].collaborate}
      </Typography>
      <Stack sx={{ my: 2 }}>
        <a
          href="https://cafecito.app/imaginalo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Invitame un café en cafecito.app"
            src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
            srcSet="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
          />
        </a>
      </Stack>
      <Stack
        spacing={1.5}
        sx={{
          '& .MuiAvatar-root': { m: 'auto' },
          justifyContent: 'center',
          p: 1,
        }}
      >
        <Typography fontWeight={900} sx={{ mb: -2 }} variant="h1">
          Bitcoin
        </Typography>
        <Typography fontSize={9}>(BEP20)</Typography>
        <Avatar
          src="/images/btc-bep20-fiwind.png"
          sx={{ height: 'auto', width: 180 }}
          variant="square"
        />
        <Chip
          label="0x9336e589e91cdde188e9c4a1595d819fa380baf9"
          sx={{ fontWeight: 'bold' }}
        />
      </Stack>
      <Stack
        spacing={1.5}
        sx={{
          '& .MuiAvatar-root': { m: 'auto' },
          justifyContent: 'center',
          p: 1,
        }}
      >
        <Typography fontWeight={900} sx={{ mb: -2 }} variant="h1">
          USDT
        </Typography>
        <Typography fontSize={9}>(Polygon)</Typography>
        <Avatar
          src="/images/usdt-polygon-fiwind.png"
          sx={{ height: 'auto', width: 180 }}
          variant="square"
        />
        <Chip
          label="0x9336e589e91cdde188e9c4a1595d819fa380baf9"
          sx={{ fontWeight: 'bold' }}
        />
      </Stack>
    </Box>
  )
}

export default Collaborations
