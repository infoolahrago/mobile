import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Header, Content, Form, Item, Input, Label, Text, Button, Col, Grid } from 'native-base';
import { Alert } from 'react-native';
import { setUsername, setPassword } from "../action/LoginAction";
import loginStore from "../store/LoginStore";

class LoginScreen extends Component {

    errorAlert() {
        Alert.alert(
            'Error',
            'Username or Password does not match',
            [
                {text: 'OK'},
            ],
            { cancelable: false }
        )
    }

    login() {
        // if (this.props.login.username != "bagus" && this.props.login.password != "pass.123") {
        //     this.errorAlert();
        // }
        this.props.serviceLogin(this.props.login.username, this.props.login.password);
    }

    render() {
        return (
        <Container>
            <Content>
                <Form style={{
                    marginTop: "60%"
                }}>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input onChangeText={(username) => this.props.setUsername(username)}/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input onChangeText={(password) => this.props.setPassword(password) }/>
                    </Item>
                </Form>
                <Grid>
                    <Col style={{height: 100 }}>
                        <Button primary
                        style={{
                            marginTop: 20,
                            marginLeft: 50,
                            alignSelf: "center"
                        }}
                        onPress={this.login.bind(this)}
                        >
                            <Text>Sign In</Text>
                        </Button>
                    </Col>
                    <Col style={{height: 100 }}>
                        <Button primary
                        style={{
                            marginTop: 20,
                            marginRight: 50,
                            alignSelf: "center"
                        }}>
                            <Text>Sign Up</Text>
                    </Button></Col>
                </Grid>
            </Content>
        </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => {
            dispatch(setUsername(username));
        },
        setPassword: (password) => {
            dispatch(setPassword(password));
        },
        setLogin: (username, password) => {
            dispatch(serviceLogin(username,password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);