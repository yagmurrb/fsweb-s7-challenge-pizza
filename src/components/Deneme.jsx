import React, { useState } from "react";
import {
  Button,
  CardGroup,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import Header from "./Header";

function Deneme() {
  const [quantity, setQuantity] = useState(1);

  const clickHandler = (event) => {
    const { name } = event.target;
    if (name === "minus") {
      if (quantity > 1) setQuantity(quantity - 1);
    } else if (name === "plus") {
      setQuantity(quantity + 1);
    }
    if (name === "order") {
      history.push("/approval");
    }
  };
  const handleIngredientChange = (event) => {
    const ingredient = event.target.value;
    if (event.target.checked) {
      if (selectedIngredients.length < maxIngredientSelection) {
        setSelectedIngredients((prevIngredients) => [
          ...prevIngredients,
          ingredient,
        ]);
      } else {
        toast.error("Lütfen en fazla 10 malzeme seçiniz.");
      }
    } else {
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item !== ingredient)
      );
    }
  };
  const ingredients = [
    { value: "pepperoni", label: "Pepperoni" },
    { value: "mushrooms", label: "Mantar" },
    { value: "olives", label: "Zeytin" },
    { value: "sausage", label: "Sosis" },
    { value: "ham", label: "Jambon" },
    { value: "onions", label: "Soğan" },
    { value: "cheese", label: "Ekstra Peynir" },
    { value: "bell pepper", label: "Biber" },
    { value: "jalapenos", label: "Jalapeno" },
    { value: "pineapple", label: "Ananas" },
    { value: "chicken", label: "Tavuk" },
    { value: "tomatoes", label: "Domates" },
    { value: "corn", label: "Mısır" },
  ];

  return (
    <>
      <div>
        <Form>
          <FormGroup row>
            {/*  <FormGroup row className="mt-2"> */}
            <Col md={6}>
              <legend>
                <b>Boyut Sec</b>
              </legend>
              <Label className="text-left">
                <FormGroup check>
                  <Input name="radio1" type="radio" className="boyutSec" />{" "}
                  <Label check>Küçük</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" /> <Label check>Orta</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>Büyük</Label>
                </FormGroup>
              </Label>
            </Col>
            <Col md={6}>
              <Label for="exampleSelect">
                <b>Hamur Kalınlığı</b>
              </Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>Hamur Kalınlığı Seçin</option>
                <option>İnce</option>
                <option>Normal</option>
                <option>Kalın</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label>
              <b>Ek Malzemeler</b>
            </Label>
            <Row>
              {ingredients.map((ingredient, index) => (
                <Col md={4} key={index}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={ingredient.value}
                        onChange={handleIngredientChange}
                      />
                      {ingredient.label}
                    </Label>
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </FormGroup>
          <FormGroup row>
            <Col md={6}>
              <Label>
                <b>Siparis Notu</b>
              </Label>
              <Label for="exampleText"></Label>
              <Input id="exampleText" name="text" type="textarea" />
            </Col>
            <Col md={6}>
              <Label for="exampleText">
                {" "}
                <b>İsminizi Giriniz</b>
              </Label>
              <Input id="exampleText" name="text" type="textarea" />
            </Col>
          </FormGroup>
          <FormGroup className="quantity-group">
            <CardGroup>
              <Label> Adet</Label>

              <Button
                type="button"
                name="minus"
                color="warning"
                onClick={clickHandler}
              >
                -
              </Button>
              <Col xs={1}>
                <FormText sm={2}>{quantity}</FormText>
              </Col>

              <Button
                type="button"
                name="plus"
                color="warning"
                onClick={clickHandler}
              >
                +
              </Button>
            </CardGroup>
          </FormGroup>
          <FormGroup></FormGroup>
          <Button color="warning" type="submit" name="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Deneme;
