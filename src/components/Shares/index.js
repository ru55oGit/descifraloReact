import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import i18n from 'constants/i18n.json'
import { useLanguageContext } from 'store/language'

const Shares = () => {
  const { languageState } = useLanguageContext()

  return (
    <Stack sx={{ p: 2 }}>
      <Typography sx={{ textAlign: 'center' }} variant="hxl">
        {i18n.texts[languageState?.language].share}
      </Typography>
      <Stack
        direction="row"
        sx={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <Link
          href={`whatsapp://send?text=${encodeURIComponent(
            window.location.origin
          )}`}
        >
          <Avatar
            src="/images/whatsappicon.png"
            sx={{ height: 48, width: 48 }}
          />
        </Link>
        <Link
          href={`https://www.facebook.com/dialog/share?app_id=1430238181087321&display=popup&href=${encodeURIComponent(
            window.location.origin
          )}&redirect_uri=${encodeURIComponent(window.location.origin)}`}
        >
          <Avatar
            src="/images/facebookicon.png"
            sx={{ height: 48, width: 48 }}
          />
        </Link>
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.origin
          )}`}
          target="_blank"
        >
          <Avatar
            src="/images/twittericon.png"
            sx={{ height: 48, width: 48 }}
          />
        </Link>
      </Stack>
    </Stack>
  )
}

export default Shares
