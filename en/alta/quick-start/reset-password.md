# Reset Password

## Wizard

You may use wizard to reset password. On your server launch next command:

```
alta reset-password
```

Wizard ask you next details:

- Service Name
- User login
- New password. Please note that password is not showing in the console on typing

## Troubleshooting

### Service not found

Service is not started or installed on another server

### Permission denied

Service is more privileged than wizard. Launch command with sudo to raise privileges:

```
sudo alta reset-password
```

### User not found

User with defined name is not found