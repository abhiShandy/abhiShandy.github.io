---
layout: page
title:  Linear Algebra
categories: math
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<!-- This page currently includes stuff spanning the domains of linear algebra and numerical methods. Separate them later. -->

# List of topics to write about
- Conjugate gradient
- Conditioning
- Stability
- SVD
- Gaussian elimination
- Cholesky
- Newton Raphson method
- QR algorithm
- Similarity transformation
- Basis and change of basis


# Different kinds of matrices
## Hessian
## Jacobian
## Laplacian

## Hermitian
- conjugate transpose is equal to original
- similar to symmetric matrix in real space

## Unitary
- inverse is equal to the conjugate transpose
- similar to orthogonal in real space

## Normal

## Sparse matrix

# Eigenvalue problem

\\[Ax=\lambda x\\]

Characterisitic equation
\\[det(A-\lambda I)=0\\]

- Python: np.linalg.eigh
- basic idea is to carry out a series of similarity transformation to create a diagonal matrix (diagonalize the matrix)
\\[A \rightarrow P^{-1}A P\\]
- Columns of P are eigenvectors
\\[A = V^{-1} \Lambda V\\]
- QR algorithm compared (N^3) to Householder reduction (N)
- Schrodinger equation is an eigenvalue problem \\(H\psi = E\psi \\)
- Laplacian using bras and kets results in equation containing kronecker deltas
- compare the solution of schrodinger equation using RK45 and eigenvalue methods

- Eigenspace for each eigenvalue
- \\(A-\lambda I\\) must be singular (and may also be null)
- Range and domain space are same in eigenvalue problems
- Eigenvalue decomposition \\(A=X L X^{-1}\\)
    - doesn’t always exist
    - L is diagonal, X is nonsingular
- Changes basis to Eigenspace
    - For \\(Ax=b\\), transformed b can be expressed as components along transformed x
- Geometric multiplicity (of an eigenvalue)
    - how many linearly independent eigenvectors correspond to that eigenvalue
    - Dimension of the corresponding eigenspace
    - Dimension of the null space of \\(A - \lambda  I\\)
- Characteristic polynomial
    - Monic when \\(p=det(zI - A)\\)
- Eigenvalues of real matrix may be complex
- Algebraic multiplicity
    - How many times an eigenvalues repeats as a root of \\(p_A\\)
    - An eigenvalue is called simple when its algebraic multiplicity is 1
    - Relation with geometric multiplicity: \\(am(\lambda) >= gm(\lambda)\\)
- Every matrix has at least one eigenvalue
- Similarity transformation
    - A and B are similar if, \\(A = X^{-1} B X\\)
    - Change of basis operation
    - Similar matrices have same characteristic polynomial, eigenvalues and multiplicities, but different eigenvectors
- Defective eigenvalue
    - Its algebraic multiplicity is greater than the geometric multiplicity, \\(am(\lambda) > gm(\lambda)\\)
    - Diagonal matrices are always non-defective, algebraic and geometric multiplicities are equal
- Non-defective matrices are diagonizable, in other words, have an eigenvalue decomposition
- Hermitian matrix is unitarily diagonlizable
- Normal matrix: \\(AA^* = A^*A\\)
- Matrix is unitarily diagonlizable if and only if it’s normal
- Schur factorization: \\(A = QTQ^* \\)
    - Even defective matrices can be factorized
    - Every square matrix has Schur factorization
    - the eigenvalues of A necessarily appear on the diagonal of T

# Rayleigh quotient, inverse iteration
- Restricted to real, symmetric matrices
- 2-norm is generally used
- In Phase 2, these matrices become tridiagonal, which reduces operation count from \\(m^3\\) to m
- Rayleigh quotient r(x): given a matrix A, it’s the closest probable eigenvalue of a vector x


