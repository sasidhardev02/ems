import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container
} from '@mui/material';
import {
    People as PeopleIcon,
    Business as BusinessIcon,
    Payment as PaymentIcon
} from '@mui/icons-material';

const Navbar = () => {
    const navItems = [
        { text: 'Employees', icon: <PeopleIcon />, path: '/employees' },
        { text: 'Departments', icon: <BusinessIcon />, path: '/departments' },
        { text: 'Payroll', icon: <PaymentIcon />, path: '/payroll' }
    ];

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        EMS Portal
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.text}
                                color="inherit"
                                startIcon={item.icon}
                                component={RouterLink}
                                to={item.path}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar; 