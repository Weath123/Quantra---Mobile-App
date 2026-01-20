# Contributing to Quantra Mobile App

Thank you for your interest in contributing to Quantra! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Quantra---Mobile-App.git
   cd Quantra---Mobile-App
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Pulling Latest Information

Before making any changes, always pull the latest information from the main repository:

```bash
# Add upstream remote (only need to do this once)
git remote add upstream https://github.com/Weath123/Quantra---Mobile-App.git

# Fetch and pull latest changes
git fetch upstream
git pull upstream main
```

## Development Workflow

### 1. Create a Branch

Create a new branch for your feature or fix:

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

Before committing:

```bash
# Run the app and test manually
npm start

# Ensure no errors in console
# Test all affected features
```

### 4. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "Add feature: description of what you did"
```

Good commit message examples:
- "Add pull-to-refresh functionality"
- "Fix caching issue in dataService"
- "Update README with setup instructions"

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request"
3. Provide a clear title and description
4. Reference any related issues

## Code Style Guidelines

### JavaScript/React Native

- Use functional components with hooks
- Use arrow functions for component methods
- Keep components small and focused
- Use meaningful variable and function names
- Add PropTypes or TypeScript types (when applicable)

### File Organization

```
src/
├── components/     # Reusable UI components
├── services/       # API and data services
├── utils/          # Helper functions and utilities
├── screens/        # Full screen components (add as needed)
└── config/         # Configuration files (add as needed)
```

### Naming Conventions

- **Files**: PascalCase for components (`DataCard.js`), camelCase for utilities (`storage.js`)
- **Functions**: camelCase (`pullInformation`, `getData`)
- **Components**: PascalCase (`DataCard`, `App`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

## Adding New Features

### Adding a New Data Pull Function

1. Add the function to `src/services/dataService.js`:
```javascript
export const pullYourData = async (params) => {
  try {
    const response = await apiClient.get('/your-endpoint', { params });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};
```

2. Export it in the default export
3. Use it in your components

### Adding a New Component

1. Create file in `src/components/`
2. Follow the existing component structure
3. Export as default
4. Import and use in other files

## Documentation

When adding features:

- Update README.md if it affects setup or usage
- Add comments for complex logic
- Update SETUP.md for installation steps
- Document API changes

## Pull Request Guidelines

### Before Submitting

- [ ] Code runs without errors
- [ ] Tested on both iOS and Android (if possible)
- [ ] No console warnings
- [ ] Code follows project style
- [ ] Documentation updated
- [ ] Commit messages are clear

### PR Description Should Include

1. **What** - What does this PR do?
2. **Why** - Why is this change needed?
3. **How** - How does it work?
4. **Testing** - How was it tested?
5. **Screenshots** - If UI changes, include screenshots

## Reporting Issues

When reporting bugs, include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - How to reproduce the bug
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Environment** - Device, OS version, app version
6. **Screenshots/Logs** - If applicable

## Questions?

If you have questions:

1. Check existing issues and PRs
2. Review the documentation
3. Open a new issue with the "question" label

## Code of Conduct

- Be respectful and constructive
- Welcome newcomers
- Focus on what's best for the project
- Accept constructive criticism gracefully

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Quantra! 🎉
