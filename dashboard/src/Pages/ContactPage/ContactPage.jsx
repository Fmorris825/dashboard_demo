import { Card, Row } from "antd";
import "./ContactPage.css";
import ContactData from "../../ContactData";
import DemoInfoAlert from "../../components/DemoInfoAlert";

const { Meta } = Card;

const ContactPage = () => {
  return (
    <div>
      <DemoInfoAlert
        message="This Page acts a Directory for Fred as a one stop shop for all his links and socials."
        description="Feel free to use these links to access Fred's socials and get in contact with him as well! 😁"
      />
      <Row className="contactContainer Container">
        {ContactData.contactResources.map((resource) => {
          return (
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt={resource.imgAlt} src={resource.imgSrc} />}
            >
              <Meta
                title={
                  <a href={resource.href} target="_blank">
                    {resource.anchorText}
                  </a>
                }
                description={resource.description}
              />
            </Card>
          );
        })}
      </Row>
    </div>
  );
};

export default ContactPage;
