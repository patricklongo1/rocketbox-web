/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import history from '../../services/history';

import { Container, Form } from './styles';

export default function Main() {
    const [box, setBox] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post('boxes', {
                title: box,
            });

            toast.success('BOX criado com sucesso!');
            history.push(`box/${response.data._id}`);
        } catch (error) {
            toast.error('Falha');
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <img src={logo} alt="RocketBox" />
                <input
                    type="text"
                    placeholder="Nome do BOX"
                    value={box}
                    onChange={e => setBox(e.target.value)}
                />
                <button type="submit">Criar</button>
            </Form>
        </Container>
    );
}
