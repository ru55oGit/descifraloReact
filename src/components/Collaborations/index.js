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
        p: 1,
        textAlign: 'center',
        width: 'calc(100% - 16px)',
      }}
    >
      <Typography variant="hxxl">
        {i18n.texts[languageState?.language].collaborate}
      </Typography>
      <Stack sx={{ mb: 2, mt: 2 }}>
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
          mb: 2,
        }}
      >
        <Typography fontWeight={900} variant="h1">
          Bitcoin
        </Typography>
        <Typography>OKX</Typography>
        <Avatar
          src="/images/btc-okx.jpeg"
          sx={{ height: 'auto', width: 180 }}
          variant="square"
        />
        <Chip
          label="37o9gVhMa2ZRAYw9pzmwcczfvNFKBJXWt6"
          sx={{ fontWeight: 'bold' }}
        />
        <Typography>Binance</Typography>
        <Avatar
          src="/images/btc-binance.jpeg"
          sx={{ height: 'auto', width: 180 }}
          variant="square"
        />
        <Chip
          label="14E51krRkrB73YF3WkcuKdsSwXJGCEH2VD"
          sx={{ fontWeight: 'bold' }}
        />
      </Stack>
    </Box>
  )
}

export default Collaborations
