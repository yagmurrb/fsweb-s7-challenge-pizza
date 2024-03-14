import React, { useState } from 'react';
import { Col, FormGroup, Label, Input, Form, Button, Card, CardBody, CardTitle, Row } from 'reactstrap';

const PizzaOrderForm = () => {
    // State tanımlamaları
    const [selectedSize, setSelectedSize] = useState(''); // Seçilen boyutu saklamak için state
    const [selectedThickness, setSelectedThickness] = useState(''); // Seçilen hamur kalınlığını saklamak için state
    const [selectedToppings, setSelectedToppings] = useState([]); // Seçilen ek malzemeleri saklamak için state
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [userName, setUserName] = useState('');
    const [orderCount, setOrderCount] = useState(1);
    const pizzaPrice = 85.50;
    const ingredientPrice = 5;
    const minIngredientSelection = 4;
    const maxIngredientSelection = 10;
    // Boyut seçimi değiştiğinde çağrılacak fonksiyon
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleIngredientChange = (event) => {
        const ingredient = event.target.value;
        if (event.target.checked) {
            if (selectedIngredients.length < maxIngredientSelection) {
                setSelectedIngredients(prevIngredients => [...prevIngredients, ingredient]);
            } else { 
                alert("Lütfen en fazla 10 malzeme seçiniz.");
            }
        } else {
            setSelectedIngredients(prevIngredients => prevIngredients.filter(item => item !== ingredient));
        }
    };
    // Kullanıcı adı girişi değiştiğinde çağrılacak fonksiyon
    const handleNameChange = (event) => {
        const name = event.target.value;
        setUserName(name);
    };
    // Hamur kalınlığı seçimi değiştiğinde çağrılacak fonksiyon
    const handleThicknessChange = (event) => {
        setSelectedThickness(event.target.value);
    };


    const calculateTotalPrice = () => {
        const ingredientTotal = selectedIngredients.length * ingredientPrice;
        return (pizzaPrice + ingredientTotal) * orderCount;
    };

    const incrementOrderCount = () => {
        setOrderCount(prevCount => prevCount + 1);
    };

    const decrementOrderCount = () => {
        if (orderCount > 1) {
            setOrderCount(prevCount => prevCount - 1);
        }
    };
    const handleSubmitOrder = () => {
        if (!selectedSize || !selectedThickness) {
            alert("Lütfen boyut ve hamur kalınlığı seçin.");
        } else if (selectedIngredients.length < minIngredientSelection) {
            alert("Lütfen en az 4 malzeme seçiniz.");
        } else if (selectedIngredients.length > maxIngredientSelection) {
            alert("Lütfen en fazla 10 malzeme seçiniz.");
        } else if (userName.length < 3) {
            alert("İsim en az 3 karakter olmalıdır.");
        } else {
            // Sipariş verme işlemi burada yapılabilir
            alert("Siparişiniz alınmıştır!");
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
        { value: "corn", label: "Mısır" }
    ];

    return (
        <>
            <div>

                <FormGroup row>

                    <Col md={6}>
                        <Label for="sizeSelect" >Boyut Seç</Label>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="size"
                                    value="small"
                                    checked={selectedSize === 'small'}
                                    onChange={handleSizeChange}
                                />{' '}
                                Küçük
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="size"
                                    value="medium"
                                    checked={selectedSize === 'medium'}
                                    onChange={handleSizeChange}
                                />{' '}
                                Orta
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="size"
                                    value="large"
                                    checked={selectedSize === 'large'}
                                    onChange={handleSizeChange}
                                />{' '}
                                Büyük
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <Label for="thicknessSelect" >Hamur Seç</Label>
                        <Input type="select" name="select" id="thicknessSelect" value={selectedThickness} onChange={handleThicknessChange}>
                            <option value="">Hamur Kalınlığı Seçin</option>
                            <option value="ince">İnce</option>
                            <option value="normal">Normal</option>
                            <option value="kalın">Kalın</option>
                        </Input>
                    </Col>
                </FormGroup>


                <FormGroup>
                    <Label>Ek Malzemeler:</Label>
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
                        <Label> <b> Sipariş Notu </b></Label>
                        <Form>
                            <Input
                                type="textarea"
                                placeholder="Siparişine eklemek istediği bir not var mı?"
                            />
                        </Form> </Col>
                    <Col md={6}>
                        <Label > <b> İsminizi Giriniz </b></Label>
                        <Form>
                            <Input
                                onChange={handleNameChange}
                                value={userName}
                                placeholder="En az 3 karakter giriniz"
                            />
                        </Form>
                    </Col>
                </FormGroup>
                <hr className="divider" />


            </div>
            <div>
                <FormGroup row >
                    <Col md={6}>
                        <div className="mt-5">
                            <Button color="warning" onClick={decrementOrderCount}>-</Button>
                            <span className="mx-2">{orderCount}</span>
                            <Button color="warning" onClick={incrementOrderCount}>+</Button>
                        </div></Col>
                    <Col md={6}>
                        <Card className="mt-3">
                            <CardBody>
                                <CardTitle>Toplam Tutar</CardTitle>
                                <div>{calculateTotalPrice()} ₺</div>
                                <Button color="success" className="mt-3" onClick={handleSubmitOrder}>Sipariş Ver</Button>

                            </CardBody>
                        </Card></Col>
                </FormGroup>
            </div>
        </>



    );
};

export default PizzaOrderForm;
