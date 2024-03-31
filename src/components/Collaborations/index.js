import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const Collaborations = () => (
  <>
    <Stack
      direction="row"
      spacing={1.5}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography fontWeight={900}>BITCOIN:</Typography>
      <Chip
        label="37o9gVhMa2ZRAYw9pzmwcczfvNFKBJXWt6"
        sx={{ fontWeight: 'bold' }}
      />
    </Stack>
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
  </>
)

export default Collaborations
