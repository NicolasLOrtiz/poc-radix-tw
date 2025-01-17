import {describe, expect, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from './Button';

describe('Button component', () => {
    it('Deve renderizar sem erros com o texto padrão', () => {
        render(<Button>Meu Botão</Button>);

        const buttonElement = screen.getByRole('button', {name: /Meu Botão/i});

        expect(buttonElement).toBeInTheDocument();
    });

    it('Deve aplicar a variant "filled" como padrão se nenhuma for passada', () => {
        render(<Button>Botão Padrão</Button>);

        const buttonElement = screen.getByRole('button', {name: /Botão Padrão/i});

        expect(buttonElement.className).toContain('bg-blue-600');
        expect(buttonElement.className).toContain('text-white');
    });

    it('Deve renderizar com a variant "outlined"', () => {
        render(<Button variant="outlined">Outlined</Button>);

        const buttonElement = screen.getByRole('button', {name: /Outlined/i});

        expect(buttonElement.className).toContain('border');
        expect(buttonElement.className).toContain('border-blue-600');
    });

    it('Deve renderizar com a variant "text"', () => {
        render(<Button variant="text">Text Variant</Button>);

        const buttonElement = screen.getByRole('button', {name: /Text Variant/i});

        expect(buttonElement.className).toContain('text-blue-600');
        expect(buttonElement.className).not.toContain('bg-blue-600');
    });

    it('Deve disparar onClick quando não está desabilitado', async () => {
        const handleClick = vi.fn();

        render(<Button onClick={handleClick}>Clique</Button>);

        const buttonElement = screen.getByRole('button', {name: /Clique/i});

        await userEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('Não deve disparar onClick quando está desabilitado', async () => {
        const handleClick = vi.fn();

        render(
            <Button disabled onClick={handleClick}>
                Botão Desabilitado
            </Button>
        );

        const buttonElement = screen.getByRole('button', {name: /Botão Desabilitado/i});

        await userEvent.click(buttonElement);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('Deve renderizar como <Slot> quando "asChild" é true', () => {
        render(
            <Button asChild>
                <a href="/fake">Link Como Botão</a>
            </Button>
        );

        const linkElement = screen.getByRole('link', {name: /Link Como Botão/i});

        expect(linkElement).toBeInTheDocument();

        const button = screen.queryByRole('button', {name: /Link Como Botão/i});
        expect(button).toBeNull();
    });

    it('Deve adicionar classes customizadas via prop className', () => {
        render(<Button className="min-w-[200px]">Custom Class</Button>);

        const buttonElement = screen.getByRole('button', {name: /Custom Class/i});

        expect(buttonElement.className).toContain('min-w-[200px]');
    });
});
