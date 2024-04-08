import Row from "../ui/Row";
import Heading from "../ui/Heading";
import SettingsForm from "../features/settings/SettingsForm";

function Settings() {
  return (
    <>
      <Row>
        <Heading as="h1">Settings</Heading>
      </Row>
      <Row>
        <SettingsForm />
      </Row>
    </>
  )
}

export default Settings