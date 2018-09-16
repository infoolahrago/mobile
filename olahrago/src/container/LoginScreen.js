import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Header, Content, Form, Item, Input, Label, Text, Button, Col, Grid } from 'native-base';
import { Alert, AsyncStorage } from 'react-native';
import { ActionSetUsername, ActionSetPassword, ServiceLogin} from "../action/LoginAction";


class LoginScreen extends Component {
    componentWillReceiveProps(next_props) {
        if (Object.keys(next_props.login.response).length > 0) {
            this.ErrorAlert(next_props.login.message);
            
            if (next_props.login.response.status == true) {
                AsyncStorage.setItem("jwt_tokens", next_props.login.response.data);
            }
        }
    }

    ErrorAlert(message) {
        Alert.alert(
            'Information',
            message,
            [
                {text: 'OK'},
            ],
            { cancelable: false }
        )
    }

    Login() {
        this.props.SetLogin(this.props.login.username, this.props.login.password);
    }

    SignUp() {
        const jwt = AsyncStorage.getItem("jwt_token")
        .then((key) => {
            return key;
        });

        console.log(jwt);
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
                        <Input onChangeText={(username) => this.props.SetUsername(username)}/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input onChangeText={(password) => this.props.SetPassword(password) }/>
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
                        onPress={this.Login.bind(this)}
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
                        }}
                        onPress={this.SignUp.bind(this)}
                        >
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
        SetUsername: (username) => {
            dispatch(ActionSetUsername(username));
        },
        SetPassword: (password) => {
            dispatch(ActionSetPassword(password));
        },
        SetLogin: (username, password) => {
            dispatch(ServiceLogin(username,password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);